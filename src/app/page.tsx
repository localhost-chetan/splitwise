import Image from "next/image";
import { Section } from "@components/layouts";
import { FEATURES, STEPS, TESTIMONIALS } from "@constants/landing-page";
import { CTAButton, FeatureCard, TestimonialCard } from "@components/blocks";

export default function Page() {
  return (
    <>
      {/* Hero Section */}
      <Section
        id={`hero`}
        hasMainHeading
        badgeText={`Split expenses. Simplify life.`}
        title={`The smartest way to split expenses with friends.`}
        description={`Track shared expenses, split bills effortlessly, and settle up quickly. Never worry about who owes who again.`}
      >
        <div
          className={`flex flex-col items-center justify-center gap-x-10 gap-y-6 sm:flex-row`}
        >
          <CTAButton isPrimary href={`/dashboard`} label={`Get Started`} />
          <CTAButton href={`#how-it-works`} label={`How It Works`} />
        </div>

        <div className={`mx-[3vw] my-10 sm:mx-15 md:mx-25`}>
          <Image
            priority
            width={1000}
            height={720}
            alt={`Hero Image`}
            src={`/hero_image.png`}
            sizes={`(max-width: 640px) 70vw, (max-width: 1024px) 70vw, 1000px`}
            className={`border-primary/70 shadow-primary aspect-video overflow-hidden rounded-lg border-4`}
          />
        </div>
      </Section>

      {/* Features Section */}
      <Section
        id={`features`}
        badgeText={`Features`}
        title={`Everything you need to split expenses.`}
        description={`Our plateform provides all the tools you need to handle shared expenses with ease.`}
        className={`bg-gray-100 text-center dark:bg-gray-700/10`}
      >
        <div
          className={`mx-5 mt-10 grid grid-cols-1 gap-8 sm:mx-8 sm:grid-cols-2 md:grid-cols-3 md:gap-x-5 lg:gap-x-10`}
        >
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </Section>

      {/* How It Works Section */}
      <Section
        id={`how-it-works`}
        badgeText={`How It Works`}
        title={`Splitting expenses has never been easier.`}
        description={`Follow these simple steps to start tracking and splitting expenses wihh friends.`}
      >
        <div
          className={`mx-5 my-10 flex flex-wrap content-center items-center justify-center gap-10`}
        >
          {STEPS.map(({ label, title, description }) => (
            <div
              key={label}
              className={`flex flex-col items-center justify-center gap-y-4 rounded-md px-3`}
            >
              <div
                className={`text-primary flex size-12 items-center justify-center rounded-full bg-green-200 text-2xl font-semibold`}
              >
                {label}
              </div>

              <h3 className={`text-lg font-bold`}>{title}</h3>
              <p className={`max-w-[30ch] text-pretty`}>{description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Testimonial Section */}
      <Section
        id={`testimonials`}
        badgeText={`Testimonials`}
        title={`What our users are saying.`}
        description={` Our plateform provides all the tools you need to handle shared expenses with ease.`}
        className={`bg-gray-100 dark:bg-gray-700/10`}
      >
        <div
          className={`sm mx-5 mt-20 flex flex-wrap content-center justify-center gap-y-5 sm:mx-8 sm:gap-10`}
        >
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <section className={`gradient-effect py-20`}>
        <div
          className={`flex flex-col items-center justify-center text-center`}
        >
          <h2
            className={`px-2 text-2xl font-semibold text-pretty text-white sm:text-3xl sm:font-extrabold`}
          >
            Ready to simpify expense sharing?
          </h2>
          <p
            className={`mt-3 max-w-lg text-sm text-balance text-green-100 md:text-base/normal`}
          >
            Join thounsands of users who have made splitting expenses
            stress-free.
          </p>

          <CTAButton
            href={`/dashboard`}
            label={`Get Started`}
            className={`mt-4`}
          />
        </div>
      </section>
    </>
  );
}
