import Layout from "@/components/Template/Layout/Layout";
import { Suspense } from "react";
import InnerDashboard from "@/components/dashboard/Main/dashboardInnerDashboard";

export default function Dashboard() {
  return (
    <>
      <Layout>
        <Suspense fallback={<h2>Loading...</h2>}>
          <InnerDashboard />
        </Suspense>
      </Layout>
    </>
  );
}
