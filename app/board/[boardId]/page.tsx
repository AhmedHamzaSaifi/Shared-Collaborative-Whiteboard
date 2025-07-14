"use client";

import { Room } from "@/components/room";
import { Loading } from "./_components/loading";
import { useEffect } from "react";
import { Canvas } from "./_components/canvas";
interface BoardIdPageProps {
  params: { boardId: string };
}

const BoardIdPage = ({ params }: BoardIdPageProps) => {
  useEffect(() => {
    document.title = `Board - Miro Clone`;
  }, []);

  return (
    <Room roomId={params.boardId} fallback={<Loading />}>
      <Canvas boardId={params.boardId} />
    </Room>
  );
};

export default BoardIdPage;
