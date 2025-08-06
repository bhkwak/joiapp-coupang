import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

interface StoryboardFrameProps {
  title: string;
  step: number;
  description: string;
  features: string[];
  children: React.ReactNode;
  highlight?: boolean;
}

export function StoryboardFrame({ title, step, description, features, children, highlight = false }: StoryboardFrameProps) {
  return (
    <Card className={`w-full max-w-sm ${highlight ? 'ring-2 ring-primary' : ''}`}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <Badge variant="secondary" className="w-fit">
            Step {step}
          </Badge>
          {highlight && <Badge variant="default">Current</Badge>}
        </div>
        <CardTitle className="text-lg">{title}</CardTitle>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="bg-muted rounded-lg p-4 min-h-[200px] flex items-center justify-center">
          {children}
        </div>
        <div className="space-y-1">
          <h4 className="text-sm font-medium">Key Features:</h4>
          <ul className="text-xs text-muted-foreground space-y-1">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="w-1 h-1 bg-current rounded-full mt-2 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}