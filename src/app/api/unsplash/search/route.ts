import { NextResponse } from "next/server";

const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY!;

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("query") || "dream";

  const response = await fetch(
    `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
      query,
    )}&per_page=12&client_id=${UNSPLASH_ACCESS_KEY}`,
  );

  if (!response.ok) {
    return NextResponse.json(
      { error: "Unsplash APIの取得に失敗しました" },
      { status: 500 },
    );
  }

  const data = await response.json();

  const results = data.results.map((img: any) => ({
    id: img.id,
    url: img.urls.small,
    alt: img.alt_description || "Unsplash Image",
  }));

  return NextResponse.json(results);
}
