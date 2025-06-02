import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";

function FAQ() {
  return (
    <div className="min-h-screen flex flex-col justify-center text-white font-sora">
      
      <div className="p-1 flex flex-col items-center lg:text-lg">
        <h2 className="headings">FAQ</h2>
       <p className="text-lg lg:text-xl p-1">Got questions? We've got answers. Here are some of the most common
        questions we receive:</p>
        <Accordion.Root
          type="single"
          defaultValue="item-1"
          collapsible
          className="mt-3 ml-2 w-full lg:w-[50%] border-[1px] border-white border-opacity-15 rounded-lg p-1"
        >
          <Accordion.AccordionItem value="item-1" className="my-2 p-1">
            <Accordion.Header>
              <Accordion.Trigger className="AccordionTrigger w-full flex flex-row justify-between">
                <div>What is KuSanja?</div>
                <ChevronDownIcon className="AccordionChevron" />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp rounded-lg overflow-hidden bg-black bg-opacity-10 p-2">
              KuSanja is an all-in-one platform designed to help small
              businesses manage their orders, receipts, and other transactions
              in a centralized and organized manner.
            </Accordion.Content>
          </Accordion.AccordionItem>
          <Accordion.AccordionItem value="item-2" className="my-2 p-1">
            <Accordion.Header>
              <Accordion.Trigger className="AccordionTrigger w-full flex flex-row justify-between">
                <div>How secure is my data with KuSanja?</div>
                <ChevronDownIcon className="AccordionChevron" />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp rounded-lg overflow-hidden bg-black bg-opacity-10 p-2">
              Your data security is our top priority. We use industry-leading
              encryption methods to ensure that your information is stored
              safely and securely.
            </Accordion.Content>
          </Accordion.AccordionItem>
          <Accordion.AccordionItem value="item-3" className="my-2 p-1 overflow-hidden">
            <Accordion.Header>
              <Accordion.Trigger className="AccordionTrigger w-full flex flex-row justify-between">
                <div>Can I try KuSanja for free?</div>
                <ChevronDownIcon className="AccordionChevron" />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp rounded-lg overflow-hidden bg-black bg-opacity-10 p-2">
              Yes! We offer a free trial so you can experience all the features
              of KuSanja before committing to a subscription.
            </Accordion.Content>
          </Accordion.AccordionItem>
          <Accordion.AccordionItem value="item-4" className="my-2 p-1">
            <Accordion.Header>
              <Accordion.Trigger className="AccordionTrigger w-full flex flex-row justify-between">
                <div>Is KuSanja suitable for my business size?</div>
                <ChevronDownIcon className="AccordionChevron" />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp rounded-lg overflow-hidden bg-black bg-opacity-10 p-2">
              Whether you're a solo entrepreneur or managing a small team,
              KuSanja is designed to scale with your business needs.
            </Accordion.Content>
          </Accordion.AccordionItem>
          <Accordion.AccordionItem value="item-5" className="my-2 p-1">
            <Accordion.Header>
              <Accordion.Trigger className="AccordionTrigger w-full flex flex-row justify-between">
                <div>What kind of support do you offer?</div>
                <ChevronDownIcon className="AccordionChevron" />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp rounded-lg overflow-hidden bg-black bg-opacity-10 p-2">
              We offer comprehensive customer support, including live chat,
              email, and a dedicated help center with tutorials and guides.
            </Accordion.Content>
          </Accordion.AccordionItem>
        </Accordion.Root>
      </div>
    </div>
  );
}

export default FAQ;
