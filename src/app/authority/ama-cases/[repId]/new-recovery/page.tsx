"use client";

import React, { Suspense } from "react";
import { useParams } from "next/navigation";
import { Loader2 } from "lucide-react";
import { NewRecoveryForm } from "@/app/authority/ama-cases/new-recovery/page";

export default function ScopedNewRecoveryPage() {
  const params = useParams();
  const repId = String(params?.repId || "");

  return (
    <Suspense
      fallback={
        <div className="min-h-[400px] flex items-center justify-center">
          <Loader2 className="w-8 h-8 text-[#DC2626] animate-spin" />
        </div>
      }
    >
      <NewRecoveryForm repId={repId} />
    </Suspense>
  );
}
