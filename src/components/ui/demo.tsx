import InteractiveBentoGallery, {
  type MediaItemType,
} from "@/components/ui/interactive-bento-gallery";

const mediaItems: MediaItemType[] = [
  {
    id: 1,
    type: "image",
    title: "Group Photo",
    desc: "School 9-a-side hockey league team moment.",
    url: "https://lh3.googleusercontent.com/pw/AP1GczMrKHHu7zvAclrA0-REjQVaDunGh1dDwGiaJhKulmSMGTovigEEclrPPLdjORuHdXZUzmA18Er80PS-9t91Wx63tfhFFTh_wsz-q5DIXlct4k2Ks65jVa6OLnhmaL1PrTGEufeve0EozZ1Lvr6ZVGzI=w1376-h917-s-no-gm?authuser=0",
    span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
  },
  {
    id: 2,
    type: "image",
    title: "PCube Logo Moment",
    desc: "Team identity and PCube branding highlight.",
    url: "https://lh3.googleusercontent.com/pw/AP1GczO0Uo1Wq3AZ2P6dhO5jrs8wkh7nq-6xYbcBsNSmwyqf50G842ybIqkbktHlPC2cSCVovSXRB33ilUjOkFdwz9fHJGt6BTZ2skwP0qdPJa9SkiEu46qgEf2xzwHfkxdTz8BApqn-mJ5-SkU1JuZzn-aT=w1376-h917-s-no-gm?authuser=0",
    span: "md:col-span-2 md:row-span-2 col-span-1 sm:col-span-2 sm:row-span-2",
  },
  {
    id: 3,
    type: "image",
    title: "PCube Niche Session",
    desc: "Focused skill development and tactical instruction.",
    url: "https://lh3.googleusercontent.com/pw/AP1GczNa2XaKWb00wduVEkANE8V-oIMjmMeQCuzQ-m_To8qcyRVRQ9BYW7ELPvDKVrF0DZNNShO3UUVDIG_L3jIbxpZa2fgpTHhAoXAtFjGnThNpskDlKSYXJ1fhdejgk7s8GQ-Dy5r4ZXl9xQNBY7oS8h6q=w1376-h917-s-no-gm?authuser=0",
    span: "md:col-span-1 md:row-span-3 sm:col-span-2 sm:row-span-2",
  },
  {
    id: 4,
    type: "image",
    title: "Coach Awards Distribution",
    desc: "Recognising commitment and leadership on the ground.",
    url: "https://lh3.googleusercontent.com/pw/AP1GczNI_LpLp7RoNPSZTmpeDOaanEkfHrXBwqaeKOktToNyigSTUmnhLEoRcPKGsxCZMuIGik0xeQ1ix4ZTdFKTlhlFQUvoPOpRCYGfs57I3hMV_r6wXw17sC7rmxF3wM4k0DCGGDnPUH7duQ-ExynDI75i=w1376-h917-s-no-gm?authuser=0",
    span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2",
  },
  {
    id: 5,
    type: "image",
    title: "Kit Distribution",
    desc: "Junior players receiving sports kits and essentials.",
    url: "https://lh3.googleusercontent.com/pw/AP1GczPktW81ud2Fmkq9Ujw4ZEhdYSi00hyKYsovmM0aeeqq-spfJhVJBiMi7dgp1bqQQ1lLNmR9jpfiOAvX49Flon5g15MHhBVW4Rbm5ZF5dn55mhtEGSloYRZ6Rnt-G6vuwGJWHxOa7MRJOeXsCWMBI-uq=w1376-h917-s-no-gm?authuser=0",
    span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
  },
  {
    id: 6,
    type: "image",
    title: "Ground Training Action",
    desc: "High-energy practice from the field sessions.",
    url: "https://lh3.googleusercontent.com/pw/AP1GczMy6EX2KZVl7UQnppYqMwJp-wWVoMjkuPgMqqb3KKY-8jxl-E8h6N_9VAXu7tTtlV50Vbxscvulq4o9gXFlToRcg6GbGQl2NNJASrSumEOe29ZLMH8ENngHlqiUS1pXr7fOvCvwf5L9E7bm4vCCbStt=w1376-h917-s-no-gm?authuser=0",
    span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2",
  },
  {
    id: 7,
    type: "image",
    title: "Medal Ceremony",
    desc: "Small children honoured at the medal ceremony.",
    url: "https://lh3.googleusercontent.com/pw/AP1GczN-PXnmyROLJSqHZzlSCAPsXCJ45yOjxVcBDa7FQxkKKAgBHiNxyb4U-Z6BY8IglWXoXgZ9OX8s7G2q7MXRtO8drHPdXpYCm0YjCMLu1QlHMmValvvRAtORET911sv9G0tMvlFa4Tr4FKxH_FNgpe6D=w1376-h917-s-no-gm?authuser=0",
    span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
  },
  {
    id: 8,
    type: "image",
    title: "Junior Kit Distribution",
    desc: "Young athletes receiving their first training kits.",
    url: "https://lh3.googleusercontent.com/pw/AP1GczNrIr9c5eZ7M8NGOiUVFxzORxrIferxm0u3FO6Cqgv9fd-92wCqPLyrMlDiCnyem2yWTmeHhrun-33nSi5BbLaOJmQfoWeBRZl-_GVy0sezBydDzpmH5M9_EB2oJyHRhhc3C_7lERobT_Cb43fhlPQf=w1376-h917-s-no-gm?authuser=0",
    span: "md:col-span-2 md:row-span-2 sm:col-span-2 sm:row-span-2",
  },
  {
    id: 9,
    type: "image",
    title: "Coach on Ground",
    desc: "Mentorship and guidance during active field drills.",
    url: "https://lh3.googleusercontent.com/pw/AP1GczMfFOVkuuBY6Sf2jiH7zJFQF_e2GHj3LfAoboKGlcDs9M-gK9THCb0EvW5a40Hagoq-icqboB7b8izWDaReg14-5sds1ni5MztToPLn9GZyHClapeTKVZFtQA7qH_Cta1n4aQ5OokEP8im33RJlIiuO=w1376-h917-s-no-gm?authuser=0",
    span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
  },
  {
    id: 10,
    type: "image",
    title: "Boys Small Kids",
    desc: "Grassroots participation from the youngest age groups.",
    url: "https://lh3.googleusercontent.com/pw/AP1GczOcMZy0o4hVeMz8LcCdqlr6MK4kq0ChgPhIjvLuii7c9RWU7BSG_JjBjrVR4SQcnUdg7U93u_dVpEpSPUa5_dixKM0mppxHCxEn9pn-Gz5jpnJ54uWnTqhKeO4TVFF0Cpdkb16uLQXnDcQM5Q1KfLHg=w1376-h917-s-no-gm?authuser=0",
    span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2",
  },
  {
    id: 11,
    type: "image",
    title: "Training Line-Up",
    desc: "Players lined up for structured drill progression.",
    url: "https://lh3.googleusercontent.com/pw/AP1GczO8I_j1jgXl1M6pGESCSYOn7KuJ6kTTP55hkTFQqrNWRc-9iAzbZvEg98UB3M6rV4YMjJJFymdrAK5-A55rPmxVKT6jlVQZQQ6euq9KzrpA5yvOWSwu-TyJRPaOZh4C6ZcBE_EjUVNEm87wvb0WL7tD=w1376-h917-s-no-gm?authuser=0",
    span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
  },
  {
    id: 12,
    type: "image",
    title: "Ground Session Different",
    desc: "Different drills building agility and game awareness.",
    url: "https://lh3.googleusercontent.com/pw/AP1GczNWLTW7HM5WYVud7p9NFreuHqWXFcswjfb3ZhgTCrJlutfeci92uTYqNPdQ1uWYHUGDqxdWZiEaXt6jzL_MnFdViXYvAwlDHVeZZ5mm0gWrddvwcQgzOFeUrA1wIBT6vZIxISCVw02ScrvdDSs9o_8K=w1376-h917-s-no-gm?authuser=0",
    span: "md:col-span-2 md:row-span-2 sm:col-span-2 sm:row-span-2",
  },
  {
    id: 13,
    type: "image",
    title: "Awards & Recognition",
    desc: "Celebrating effort, discipline, and team spirit.",
    url: "https://lh3.googleusercontent.com/pw/AP1GczM0tyAL5Y9WDB8AjqV4DxOCU0Ep_p9q92Ms2F_uHkdxZg4OVdJZkiB6MwVy5N6xzABITbaArs6GpOZvRQHIpnO1bU0CsCa21F5VIyfEKdilY0SAPUCdrhADdTDj7e7WCkRjFUI5jPGZWhw3UFb7SUSH=w1376-h917-s-no-gm?authuser=0",
    span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
  },
  {
    id: 14,
    type: "image",
    title: "Matchday Momentum",
    desc: "Fast-paced game moments from the competition day.",
    url: "https://lh3.googleusercontent.com/pw/AP1GczMkksmAKTZeot_BPN3GGX3hYsIjGWqChjobxLNxOP37IPrcv_AiS5YeTsuqR7OrSrdGm4ChXStspc8N3qOOsn7KipHIHLkzrajSuDUiaiMmpvO-s4m4CJHBGbvtk63QdUzy0OTeqnOadP0A_1ln-TRX=w1376-h917-s-no-gm?authuser=0",
    span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2",
  },
  {
    id: 15,
    type: "image",
    title: "PCube Team Spirit",
    desc: "Community, coaching, and confidence in one frame.",
    url: "https://lh3.googleusercontent.com/pw/AP1GczOpw_ZJqh92ZsPQeCZ8om2txVOMyMZJ7lzXr3Ysgp3ohhaWd_phd2b4wiEkzFYiSrTTOt6aCXujyTW8Ergl1w1pEdk6CLuOCGXXHDRXvMcA4w-k55d-lkbn2b66HnqnSK8243AqC8ybbtY5tzmuUL3M=w1376-h917-s-no-gm?authuser=0",
    span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
  },
];

export function BentoGridGalleryDemo() {
  return (
    <InteractiveBentoGallery
      mediaItems={mediaItems}
      title="PCube Ground Gallery"
      description="Drag and explore league moments, awards, and kit distribution highlights."
    />
  );
}
