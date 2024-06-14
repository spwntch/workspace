'use client';
import { ButtonGroup } from '@spwntch/components';
import { H2, H4, Lead } from '@spwntch/typography';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
} from '@spwntch/ui';

const MyTypography = () => (
  <>
    <H2 className="m-4">Hello World</H2>
    <Lead className="m-4">Hello World</Lead>
    <H4 className="m-4">Hello World</H4>
  </>
);

const MyAccordion = () => (
  <Accordion collapsible defaultValue="item-1" type="single">
    <div className="max-w-3xl mx-auto">
      <AccordionItem value="item-1">
        <AccordionTrigger>What services do you offer?</AccordionTrigger>
        <AccordionContent className="text-left">
          Our tech consulting firm offers a wide range of services including IT
          strategy development, cloud computing solutions, cybersecurity
          assessments, software development, and system integration. We tailor
          our solutions to meet the specific needs of each client.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>
          How does your consulting process work?
        </AccordionTrigger>
        <AccordionContent className="text-left">
          Our consulting process begins with an initial consultation to
          understand your business challenges and goals. We then conduct a
          thorough assessment to identify opportunities for improvement. Based
          on our findings, we develop a customized strategy and implementation
          plan. Throughout the process, we work closely with your team to ensure
          successful execution and provide ongoing support.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>
          What industries do you specialize in?
        </AccordionTrigger>
        <AccordionContent className="text-left">
          We specialize in a variety of industries including finance,
          healthcare, retail, manufacturing, and technology. Our consultants
          have extensive experience in these sectors, allowing us to provide
          industry-specific insights and solutions.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>
          How do you ensure the security of our data?
        </AccordionTrigger>
        <AccordionContent className="text-left">
          Data security is a top priority for us. We implement robust security
          measures such as encryption, multi-factor authentication, and regular
          security audits. Additionally, we adhere to industry best practices
          and compliance standards to ensure your data is protected at all
          times.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>What are your pricing models?</AccordionTrigger>
        <AccordionContent className="text-left">
          Our pricing models are flexible and designed to meet the needs of
          different clients. We offer project-based pricing, hourly rates, and
          retainer agreements. During our initial consultation, we will discuss
          your requirements and provide a detailed proposal with transparent
          pricing.
        </AccordionContent>
      </AccordionItem>
    </div>
  </Accordion>
);

export const Ui = () => {
  return (
    <>
      <MyTypography />
      <Button className="m-4">CLICK ME</Button>
      <ButtonGroup stacked>
        <Button>CLICK ME</Button>
        <Button>CLICK ME</Button>
      </ButtonGroup>
      <MyAccordion />
    </>
  );
};

export default Ui;
