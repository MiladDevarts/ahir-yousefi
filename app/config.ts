// app/config.ts

export const socialMedia = {
  telegram: "https://t.me/pooriyaariyan",
  youtube: "https://www.youtube.com/@PooriyaAriyan",
  spotify: "https://open.spotify.com/artist/45UXX4Y82EcPnVduusDL0C",
  apple_music: "https://music.apple.com/us/artist/pooriya-ariyan/1613331174",
  sound_cloud: "https://soundcloud.com/pooriya-ariyan",
  tiktok: "https://www.tiktok.com/@pooriya.ariyan",
  instagram: "https://www.instagram.com/p91.official/",
} as const;

export const video = {
  youtube: "https://www.youtube.com/@PooriyaAriyan",
} as const;

export const GenralInfo = {
  new_release: "04/11/2025",
} as const;

export const NavigationItems = [
  { title: "Home", target: "#home" },
  { title: "Bio", target: "#bio" },
  { title: "New Album ", target: "#new_album" },
  { title: "New Tracks", target: "#tracks" },
  { title: "Music Player", target: "#music_player" },
  { title: "Gallery", target: "#gallery" },
  { title: "Contact", target: "#contact" },
] as const;
