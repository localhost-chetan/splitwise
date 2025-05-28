import { Card, CardContent } from "@shadcn/card";
import { Avatar, AvatarFallback, AvatarImage } from "@shadcn/avatar";

type TestimonialCardProps = Record<`name` | `image` | `role` | `quote`, string>;

export const TestimonialCard = ({
  name,
  image,
  role,
  quote,
}: TestimonialCardProps) => {
  return (
    <Card key={name} className={`max-w-72 shadow-lg`}>
      <CardContent
        className={`flex flex-col justify-between space-y-10 text-pretty`}
      >
        <p className={`line-clamp-5`}>{quote}</p>

        <div className={`flex items-center gap-x-4`}>
          <Avatar>
            <AvatarImage src={image} alt={`${name}'s avatar`} />
            <AvatarFallback>{name?.at(0) || `U`}</AvatarFallback>
          </Avatar>

          <div className={`flex flex-col items-start justify-center gap-x-3`}>
            <p className={`font-semibold`}>{name}</p>
            <p className={`text-muted-foreground text-sm`}>{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
