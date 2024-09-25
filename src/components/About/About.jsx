
function About() {
  return (
    <div className="min-h-screen flex flex-col justify-center text-white text-center font-sora p-2">
      <h2 className="headings mb-5">About</h2>
      <div className="flex flex-col justify-center">
        
        <div className="flex flex-col lg:flex-row text-start">
        <p className="p-2 border-white border-[1px] lg:mx-2 lg:w-[50%] rounded-xl">
          At KuSanja, our mission is simple: to empower small businesses with
          the tools they need to thrive in an increasingly competitive market.
          We understand the challenges that come with running a small business,
          from managing orders and receipts to keeping track of countless
          transactions. That’s why we’ve created KuSanja—a user-friendly,
          all-in-one platform designed to simplify your business operations. Our
          story began with a desire to help small business owners save time and
          reduce the stress of managing their day-to-day activities. We believe
          that when you’re organized, you can focus on what truly
          matters—growing your business and serving your customers.
        </p>
        <p className="p-2 border-white border-[1px] rounded-xl my-2 lg:mx-2 lg:w-[50%]">
          {" "}
          KuSanja is more than just a software tool; it's your business
          assistant. We’re committed to providing you with the resources and
          support you need to succeed. Our team is dedicated to continuously
          improving our platform, ensuring that it evolves with the
          ever-changing needs of small businesses. Join us on our journey to
          make business management easier and more efficient for everyone. With
          KuSanja, you’re not just getting a tool—you’re getting a partner
          dedicated to your success.
        </p>
        </div>
      </div>
    </div>
  );
}

export default About;
