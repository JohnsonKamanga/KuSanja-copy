import {
  ArchiveIcon,
  BarChartIcon,
  BellIcon,
  ClipboardIcon,
  DashboardIcon,
  LockClosedIcon,
} from "@radix-ui/react-icons";

function Features() {
  return(
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="p-3">
        <br></br>
      </div>
  <div className="flex flex-col justify-center text-center p-1 mt-5">
      <h2 className="headings">Features</h2>
      <p className="text-2xl">
        Discover the powerful features of KuSanja that make managing your
        business a breeze
      </p>
      <ul className="grid grid-cols-2 lg:grid-cols-3">
        <li className="m-3 flex flex-col items-center text-center border-[1px] border-white rounded-lg p-2 border-opacity-70">
          <div className="p-2 mb-1 rounded-full border-[1px] border-white ">
            <ClipboardIcon />
          </div>
          <h3 className="text-xl font-semibold">Order Management:</h3>
          <p className="text-gray-200">
            Seamlessly track and manage customer orders from start to finish.
            Stay on top of order status, updates, and delivery schedules with
            ease.
          </p>
        </li>
        <li className="m-3 flex flex-col items-center text-center border-[1px] border-white rounded-lg p-2 border-opacity-70">
          <div className="p-2 mb-1 rounded-full border-[1px] border-white ">
            <ArchiveIcon />
          </div>
          <h3 className="text-xl font-semibold">Receipt Tracking:</h3>
          <p className="text-gray-200">
            Keep all your receipts in one place. Upload, organize, and retrieve
            receipts whenever you need them, ensuring your financial records are
            always accurate and up-to-date.
          </p>
        </li>
        <li className="m-3 flex flex-col items-center text-center border-[1px] border-white rounded-lg p-2 border-opacity-70">
          <div className="p-2 mb-1 rounded-full border-[1px] border-white ">
            <DashboardIcon />
          </div>
          <h3 className="text-xl font-semibold">Centralized Dashboard:</h3>
          <p className="text-gray-200">
            Access all your business transactions from a single, user-friendly
            dashboard. Get a complete overview of your business activities at a
            glance.
          </p>
        </li>
        <li className="m-3 flex flex-col items-center text-center border-[1px] border-white rounded-lg p-2 border-opacity-70">
          <div className="p-2 mb-1 rounded-full border-[1px] border-white ">
            <BarChartIcon />
          </div>
          <h3 className="text-xl font-semibold">Automated Reports:</h3>
          <p className="text-gray-200">
            Generate detailed reports on your sales, expenses, and overall
            business performance with just a few clicks. Use these insights to
            make informed decisions and drive your business forward.
          </p>
        </li>
        <li className="m-3 flex flex-col items-center text-center border-[1px] border-white rounded-lg p-2 border-opacity-70">
          <div className="p-2 mb-1 rounded-full border-[1px] border-white ">
            <LockClosedIcon />
          </div>
          <h3 className="text-xl font-semibold">Secure Data Storage:</h3>
          <p className="text-gray-200">
            Rest assured knowing that all your business data is stored securely
            in the cloud. We prioritize your privacy and ensure that your
            information is protected.
          </p>
        </li>
        <li className="m-3 flex flex-col items-center text-center border-[1px] border-white rounded-lg p-2 border-opacity-70">
          <div className="p-2 mb-1 rounded-full border-[1px] border-white ">
            <BellIcon />
          </div>
          <h3 className="text-xl font-semibold">Customizable Notifications:</h3>
          <p className="text-gray-200">
            Stay informed with real-time alerts and notifications. Customize
            what you want to be notified about, whether it's a new order,
            payment, or low inventory.
          </p>
        </li>
      </ul>
    </div>
    </div>
  );
}

export default Features;
