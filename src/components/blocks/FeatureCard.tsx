import { type LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@shadcn/card";

type FeatureCardProps = Record<
  `title` | `bg` | `color` | `description`,
  string
> & {
  Icon: LucideIcon;
};

export const FeatureCard = ({
  title,
  description,
  bg,
  Icon,
  color,
}: FeatureCardProps) => {
  return (
    <Card key={title} className={`max-w-72 shadow-lg`}>
      <CardHeader
        className={`flex flex-col items-center justify-center gap-y-5`}
      >
        <div
          className={`size-10 rounded-full ${bg} shadow-primary flex items-center justify-center`}
        >
          <Icon className={`${color} size-6`} />
        </div>
        <CardTitle className={`text-lg font-bold`}>{title}</CardTitle>
      </CardHeader>

      <CardContent className={`text-pretty`}>{description}</CardContent>
    </Card>
  );
};
