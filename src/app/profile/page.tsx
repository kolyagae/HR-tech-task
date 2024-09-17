"use client";
import Header from "@/components/Header";
import MyInfoSection from "@/components/MyInfoSection";
import { Tabs, TabsContent } from "@radix-ui/react-tabs";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

const Profile = () => {
  const router = useRouter();
  const { status } = useSession();
  if (status === "unauthenticated") {
    router.push("/");
  }
  return (
    <Tabs defaultValue='my-info'>
      <Header />
      <TabsContent value='my-info'>
        <MyInfoSection />
      </TabsContent>
    </Tabs>
  );
};

export default Profile;
