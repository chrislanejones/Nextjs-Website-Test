import React from "react";

export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  const id = params.id;

  // fetch data
  const product = await fetch(`https://.../${id}`).then((res) => res.json());

  return {
    title: product.title,
  };
}
const page = () => {
  return <div>posts</div>;
};

export default function Page({ params, searchParams }) {}
