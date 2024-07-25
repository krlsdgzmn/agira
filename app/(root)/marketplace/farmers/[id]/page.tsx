import Container from "@/components/container";
import React from "react";

export default function FarmerPage({ params }: { params: { id: string } }) {
  return (
    <Container className="flex min-h-[85vh] items-center justify-center">
      Farmer Profile {params.id}
    </Container>
  );
}
