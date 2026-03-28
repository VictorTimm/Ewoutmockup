import { HomeStyle1 } from "@/components/home/HomeStyle1";
import { HomeStyle2 } from "@/components/home/HomeStyle2";
import { HomeStyle3 } from "@/components/home/HomeStyle3";
import { HomeStyle4 } from "@/components/home/HomeStyle4";
import { HomeStyle5 } from "@/components/home/HomeStyle5";
import { HomeStyle51 } from "@/components/home/HomeStyle51";
import { HomeStyle52 } from "@/components/home/HomeStyle52";
import { HomeStyle6 } from "@/components/home/HomeStyle6";

const STYLES = {
  "1": HomeStyle1,
  "2": HomeStyle2,
  "3": HomeStyle3,
  "4": HomeStyle4,
  "5": HomeStyle5,
  "5.1": HomeStyle51,
  "5.2": HomeStyle52,
  "6": HomeStyle6,
} as const;

type Variant = keyof typeof STYLES;

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ v?: string }>;
}) {
  const params = await searchParams;
  const v = (params?.v || "5") as string;
  const variant: Variant =
    v in STYLES ? (v as Variant) : "1";
  const Page = STYLES[variant];

  return <Page />;
}
