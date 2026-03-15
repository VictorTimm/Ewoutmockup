import { HomeStyle1 } from "@/components/home/HomeStyle1";
import { HomeStyle2 } from "@/components/home/HomeStyle2";
import { HomeStyle3 } from "@/components/home/HomeStyle3";
import { HomeStyle4 } from "@/components/home/HomeStyle4";
import { HomeStyle5 } from "@/components/home/HomeStyle5";

const STYLES = {
  "1": HomeStyle1,
  "2": HomeStyle2,
  "3": HomeStyle3,
  "4": HomeStyle4,
  "5": HomeStyle5,
} as const;

type Variant = keyof typeof STYLES;

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ v?: string }>;
}) {
  const params = await searchParams;
  const v = (params?.v || "1") as string;
  const variant: Variant =
    v in STYLES ? (v as Variant) : "1";
  const Page = STYLES[variant];

  return <Page />;
}
