import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type RaidMode = "remote" | "local";
export type PostKind = "shiny" | "ditto" | "shadow" | "hundo";

export type Member = {
  id: string;
  name: string;
  code: string;
  vip: boolean;
  ready: boolean;
  isSelf?: boolean;
};

export type Room = {
  id: string;
  boss: string;
  cp: number;
  type: string;
  minutes: number;
  mode: RaidMode;
  capacity: number;
  hostName: string;
  hostCode: string;
  password: string;
  queue: Member[];
  launched: boolean;
  createdAt: number;
};

export type Comment = { id: string; author: string; text: string };

export type Post = {
  id: string;
  author: string;
  kind: PostKind;
  text: string;
  location: string;
  image?: string;
  iv: { a: number; d: number; s: number };
  likes: number;
  liked: boolean;
  comments: Comment[];
  createdAt: number;
};

export type Profile = {
  trainerName: string;
  gameCode: string;
  friendCode: string;
  level: number;
  vip: boolean;
};

const ADMIN_TAG = "wudi0693";

const WORDS = [
  "Pikachu",
  "Bulbasaur",
  "Charmander",
  "Squirtle",
  "Eevee",
  "Snorlax",
  "Gengar",
  "Lapras",
  "Dratini",
  "Mewtwo",
];

export function generatePassword() {
  const pick = () => WORDS[Math.floor(Math.random() * WORDS.length)];
  const a = pick();
  let b = pick();
  let c = pick();
  while (b === a) b = pick();
  while (c === a || c === b) c = pick();
  return `${a}-${b}-${c}`;
}

function randCode() {
  const n = () => String(Math.floor(1000 + Math.random() * 9000));
  return `${n()} ${n()} ${n()}`;
}

const uid = () => Math.random().toString(36).slice(2, 10);

function seedRooms(): Room[] {
  return [
    {
      id: uid(),
      boss: "Mewtwo",
      cp: 54148,
      type: "Psychic",
      minutes: 38,
      mode: "remote",
      capacity: 10,
      hostName: "wudi0693",
      hostCode: randCode(),
      password: generatePassword(),
      launched: false,
      createdAt: Date.now() - 120000,
      queue: [
        { id: uid(), name: "ShinyHunterJP", code: randCode(), vip: true, ready: true },
        { id: uid(), name: "KimRaidKing", code: randCode(), vip: false, ready: true },
        { id: uid(), name: "阿杰打团", code: randCode(), vip: false, ready: false },
      ],
    },
    {
      id: uid(),
      boss: "Rayquaza",
      cp: 51968,
      type: "Dragon",
      minutes: 21,
      mode: "local",
      capacity: 5,
      hostName: "NeonTrainer",
      hostCode: randCode(),
      password: generatePassword(),
      launched: false,
      createdAt: Date.now() - 300000,
      queue: [{ id: uid(), name: "MistyGo", code: randCode(), vip: false, ready: false }],
    },
  ];
}

function seedPosts(): Post[] {
  return [
    {
      id: uid(),
      author: "ShinyHunterJP",
      kind: "shiny",
      text: "街中で色違いゲット！5000回目の遭遇でようやく…",
      location: "Shibuya, Tokyo",
      image: "shiny",
      iv: { a: 15, d: 14, s: 15 },
      likes: 128,
      liked: false,
      comments: [
        { id: uid(), author: "KimRaidKing", text: "축하합니다! 부럽네요 🔥" },
        { id: uid(), author: "阿杰打团", text: "运气太好了吧！" },
      ],
      createdAt: Date.now() - 600000,
    },
    {
      id: uid(),
      author: "NeonTrainer",
      kind: "shadow",
      text: "Shadow catch of the night — 96% and ready for the raid meta.",
      location: "KLCC Park",
      image: "shadow",
      iv: { a: 15, d: 14, s: 14 },
      likes: 74,
      liked: false,
      comments: [{ id: uid(), author: "MistyGo", text: "Nice one!" }],
      createdAt: Date.now() - 1800000,
    },
    {
      id: uid(),
      author: "wudi0693",
      kind: "hundo",
      text: "百分百个体值，直接满级培养！",
      location: "Bukit Bintang",
      iv: { a: 15, d: 15, s: 15 },
      likes: 210,
      liked: false,
      comments: [],
      createdAt: Date.now() - 5400000,
    },
  ];
}

type StoreValue = {
  profile: Profile;
  setProfile: (p: Profile) => void;
  isAdmin: boolean;
  rooms: Room[];
  posts: Post[];
  createRoom: (r: Omit<Room, "id" | "queue" | "launched" | "createdAt">) => void;
  joinRoom: (roomId: string) => void;
  leaveRoom: (roomId: string) => void;
  toggleReady: (roomId: string, memberId: string) => void;
  kick: (roomId: string, memberId: string) => void;
  launchRoom: (roomId: string) => void;
  removeRoom: (roomId: string) => void;
  addPost: (p: Omit<Post, "id" | "likes" | "liked" | "comments" | "createdAt" | "author">) => void;
  toggleLike: (postId: string) => void;
  addComment: (postId: string, text: string) => void;
  removePost: (postId: string) => void;
  toast: string | null;
  showToast: (msg: string) => void;
  copy: (text: string, msg: string) => void;
};

const StoreContext = createContext<StoreValue | null>(null);

const defaultProfile: Profile = {
  trainerName: "wudi0693",
  gameCode: "WUDI0693",
  friendCode: "8231 4477 9015",
  level: 43,
  vip: true,
};

export function StoreProvider({ children }: { children: ReactNode }) {
  const [profile, setProfileState] = useState<Profile>(defaultProfile);
  const [rooms, setRooms] = useState<Room[]>(() => seedRooms());
  const [posts, setPosts] = useState<Post[]>(() => seedPosts());
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    const raw = localStorage.getItem("raid-nexus-profile");
    if (raw) {
      try {
        setProfileState({ ...defaultProfile, ...JSON.parse(raw) });
      } catch {
        /* ignore */
      }
    }
  }, []);

  const setProfile = (p: Profile) => {
    setProfileState(p);
    localStorage.setItem("raid-nexus-profile", JSON.stringify(p));
  };

  const isAdmin = profile.trainerName.trim().toLowerCase() === ADMIN_TAG;

  const showToast = (msg: string) => {
    setToast(msg);
    window.setTimeout(() => setToast(null), 1800);
  };

  const copy = (text: string, msg: string) => {
    void navigator.clipboard?.writeText(text);
    showToast(msg);
  };

  const value: StoreValue = useMemo(
    () => ({
      profile,
      setProfile,
      isAdmin,
      rooms,
      posts,
      toast,
      showToast,
      copy,
      createRoom: (r) =>
        setRooms((prev) => [
          { ...r, id: uid(), queue: [], launched: false, createdAt: Date.now() },
          ...prev,
        ]),
      joinRoom: (roomId) =>
        setRooms((prev) =>
          prev.map((room) => {
            if (room.id !== roomId) return room;
            if (room.queue.some((m) => m.isSelf)) return room;
            const me: Member = {
              id: uid(),
              name: profile.trainerName,
              code: profile.friendCode,
              vip: profile.vip,
              ready: false,
              isSelf: true,
            };
            if (!profile.vip) return { ...room, queue: [...room.queue, me] };
            const lastVip = room.queue.reduce((acc, m, i) => (m.vip ? i + 1 : acc), 0);
            const next = [...room.queue];
            next.splice(lastVip, 0, me);
            return { ...room, queue: next };
          }),
        ),
      leaveRoom: (roomId) =>
        setRooms((prev) =>
          prev.map((room) =>
            room.id === roomId ? { ...room, queue: room.queue.filter((m) => !m.isSelf) } : room,
          ),
        ),
      toggleReady: (roomId, memberId) =>
        setRooms((prev) =>
          prev.map((room) =>
            room.id === roomId
              ? {
                  ...room,
                  queue: room.queue.map((m) =>
                    m.id === memberId ? { ...m, ready: !m.ready } : m,
                  ),
                }
              : room,
          ),
        ),
      kick: (roomId, memberId) =>
        setRooms((prev) =>
          prev.map((room) =>
            room.id === roomId
              ? { ...room, queue: room.queue.filter((m) => m.id !== memberId) }
              : room,
          ),
        ),
      launchRoom: (roomId) =>
        setRooms((prev) =>
          prev.map((room) => (room.id === roomId ? { ...room, launched: true } : room)),
        ),
      removeRoom: (roomId) => setRooms((prev) => prev.filter((r) => r.id !== roomId)),
      addPost: (p) =>
        setPosts((prev) => [
          {
            ...p,
            id: uid(),
            author: profile.trainerName,
            likes: 0,
            liked: false,
            comments: [],
            createdAt: Date.now(),
          },
          ...prev,
        ]),
      toggleLike: (postId) =>
        setPosts((prev) =>
          prev.map((p) =>
            p.id === postId ? { ...p, liked: !p.liked, likes: p.likes + (p.liked ? -1 : 1) } : p,
          ),
        ),
      addComment: (postId, text) =>
        setPosts((prev) =>
          prev.map((p) =>
            p.id === postId
              ? {
                  ...p,
                  comments: [...p.comments, { id: uid(), author: profile.trainerName, text }],
                }
              : p,
          ),
        ),
      removePost: (postId) => setPosts((prev) => prev.filter((p) => p.id !== postId)),
    }),
    [profile, rooms, posts, toast, isAdmin],
  );

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore must be used inside StoreProvider");
  return ctx;
}
