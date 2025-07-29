// export default function App() {
//   return (
//     <main className="p-4">
//       <h1 className="text-4xl">
//         Subscription Plan Functionality - FE (L1) (React.js, Typescript, API
//         Integrations)
//       </h1>

//       <p className="text-2xl">
//         <b>
//           Important: Start the backend server using command 'npm run
//           start:server' from project root
//         </b>
//       </p>

//       <ul className="pl-6">
//         <li className="list-disc">
//           For styling tailwind is already bootstrap with this project
//         </li>
//         <li className="list-disc">Read the below instructions.</li>
//         <li className="list-disc">
//           For coding you can remove the below instructions or keep these
//           instructions for reference and start coding just below these
//           instructions
//         </li>
//         <li className="list-disc">
//           API Types are in file <b>/packages/server/types.ts</b>
//         </li>
//       </ul>

//       <p className="text-2xl mt-10">🚀 Objective</p>
//       <ul className="pl-6 space-y-3 text-lg max-w-screen-md mt-3">
//         <li className="list-decimal">
//           <p>
//             Fetch available subscriptions from the below API and display the
//             subscription information.{" "}
//             <b>
//               Note: Gracefully handle API failure - Button to retry fetching the
//               list again
//             </b>
//           </p>
//           <div className="border-black border p-1.5 rounded-md text-xs inline">
//             GET{" "}
//             <a
//               target="_blank"
//               href="http://localhost:3000/api/subscriptions"
//               className="underline underline-offset-4"
//             >
//               http://localhost:3000/api/subscriptions
//             </a>
//           </div>
//           <div className="py-4">
//             <span className="text-sm">Example: Render subscriptions</span>
//             <div className="grid grid-cols-3 mt-2 gap-4">
//               <div className="rounded-lg border p-4 min-h-20">
//                 <span>Plan A</span>
//               </div>
//               <div className="rounded-lg border p-4 min-h-20">
//                 <span>Plan B</span>
//               </div>
//               <div className="rounded-lg border p-4 min-h-20">
//                 <span>Plan C</span>
//               </div>
//             </div>
//           </div>
//         </li>
//         <li className="list-decimal">
//           <p>
//             Fetch current subscription from the below API and display which
//             subscription plan is selected from the list received from above
//             listing API.
//           </p>
//           <div className="border-black border p-1.5 rounded-md text-xs inline">
//             GET{" "}
//             <a
//               target="_blank"
//               href="http://localhost:3000/api/subscriptions/current"
//               className="underline underline-offset-4"
//             >
//               http://localhost:3000/api/subscriptions/current
//             </a>
//           </div>
//           <div className="py-4">
//             <span className="text-sm">
//               Example: Render subscriptions along with current subscription
//             </span>
//             <div className="grid grid-cols-3 mt-2 gap-4">
//               <div className="rounded-lg border p-4 min-h-20">
//                 <span>Plan A</span>
//               </div>
//               <div className="rounded-lg border p-4 min-h-20">
//                 <div>
//                   <span>Plan B</span>
//                 </div>
//                 <span className="text-blue-600 font-bold">Current Plan</span>
//               </div>
//               <div className="rounded-lg border p-4 min-h-20">
//                 <span>Plan C</span>
//               </div>
//             </div>
//           </div>
//         </li>
//         <li className="list-decimal">
//           <p>
//             Upgrade current subscription plans to plan that you want to upgrade
//             to. <br />
//             <b>
//               Note: Subscriptions plan which are on the right hand side of the
//               current plan are eligible for <u>upgrade</u> and plan which are on
//               the left hand side of the current plan are eligible for{" "}
//               <u>downgrade</u>. Subscription listing API always returns plan
//               from priority low to high
//             </b>
//             <br />
//             <b>Note: Updates the UI in response to changes</b>
//           </p>
//           <div className="flex items-start space-x-2 py-6">
//             <span className="text-sm">Upgrade API: </span>
//             <div className="flex flex-col">
//               <p className="border-black border p-1.5 rounded-md text-xs inline">
//                 POST{" "}
//                 <a
//                   target="_blank"
//                   href="http://localhost:3000/api/subscriptions/upgrade"
//                   className="underline underline-offset-4"
//                 >
//                   http://localhost:3000/api/subscriptions/upgrade
//                 </a>
//               </p>
//               <span className="text-sm mt-3">Body</span>
//               <code className="rounded-lg mt-1 inline text-xs overflow-x-scroll p-2 w-full text-white bg-zinc-950">
//                 <pre>{JSON.stringify({ code: "Plan code" }, null, 2)}</pre>
//               </code>
//             </div>
//           </div>
//           <div className="flex items-start space-x-2 py-6">
//             <span className="text-sm">Downgrade API: </span>
//             <div className="flex flex-col">
//               <p className="border-black border p-1.5 rounded-md text-xs inline">
//                 POST{" "}
//                 <a
//                   target="_blank"
//                   href="http://localhost:3000/api/subscriptions/downgrade"
//                   className="underline underline-offset-4"
//                 >
//                   http://localhost:3000/api/subscriptions/downgrade
//                 </a>
//               </p>
//               <span className="text-sm mt-3">Body</span>
//               <code className="rounded-lg mt-1 inline text-xs overflow-x-scroll p-2 w-full text-white bg-zinc-950">
//                 <pre>{JSON.stringify({ code: "Plan code" }, null, 2)}</pre>
//               </code>
//             </div>
//           </div>
//           <div className="py-4">
//             <span className="text-sm">
//               Example: Render respective Upgrade and Downgrade buttons along
//               with current subscription
//             </span>
//             <div className="grid grid-cols-3 mt-2 gap-4">
//               <div className="rounded-lg border p-4 min-h-20">
//                 <div>
//                   <span>Plan A</span>
//                 </div>
//                 <span className="text-red-600 font-bold">Downgrade</span>
//               </div>
//               <div className="rounded-lg border p-4 min-h-20">
//                 <div>
//                   <span>Plan B</span>
//                 </div>
//                 <span className="text-blue-600 font-bold">Current Plan</span>
//               </div>
//               <div className="rounded-lg border p-4 min-h-20">
//                 <div>
//                   <span>Plan C</span>
//                 </div>
//                 <span className="text-green-600 font-bold">Upgrade</span>
//               </div>
//             </div>
//           </div>
//         </li>
//       </ul>
//     </main>
//   );
// }


// packages/app/src/App.tsx
import React from "react";
import { useSubscriptions } from "./hooks/useSubscriptions";
import { CurrentSubscriptionCard } from "./components/CurrentSubscriptionCard";
import { SubscriptionCard } from "./components/SubscriptionCard";

export default function App() {
  const { plans, current, loading, error, refresh, upgrade, downgrade } =
    useSubscriptions();

  if (loading) {
    return (
      <main className="p-8">
        <button
          onClick={refresh}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Refresh
        </button>
        <p className="mt-4">Loading subscriptions…</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="p-8">
        <p className="text-red-600 mb-4">Error: {error}</p>
        <button
          onClick={refresh}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Retry
        </button>
      </main>
    );
  }

  if (!plans || !current) {
    return (
      <main className="p-8">
        <p>No subscription data found.</p>
        <button
          onClick={refresh}
          className="px-4 py-2 bg-blue-500 text-white rounded mt-4"
        >
          Refresh
        </button>
      </main>
    );
  }

  return (
    <main className="p-8 space-y-8">
      {/* Current Plan Section */}
      <section>
        <h1 className="text-3xl font-bold mb-4">Your Current Subscription</h1>
        <CurrentSubscriptionCard plan={current} />
      </section>

      {/* Available Plans Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Available Plans</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <SubscriptionCard
              key={plan.code}
              plan={plan}
              isCurrent={plan.code === current.code}
              onUpgrade={() => upgrade(plan.code)}
              onDowngrade={() => downgrade(plan.code)}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
