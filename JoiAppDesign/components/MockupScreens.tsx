import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Progress } from "./ui/progress";
import { Badge } from "./ui/badge";
import { Heart, Mic, Camera, FileText, Brain, Activity, User, Smile, Frown, Meh } from "lucide-react";

export function WelcomeScreen() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center space-y-4 p-4">
      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
        <Heart className="w-6 h-6 text-primary-foreground" />
      </div>
      <div className="text-center space-y-2">
        <h3 className="font-medium">MoodSync</h3>
        <p className="text-xs text-muted-foreground">Track your emotions, improve your wellness</p>
      </div>
      <Button size="sm" className="w-full max-w-[120px]">Get Started</Button>
    </div>
  );
}

export function EmotionInputScreen() {
  return (
    <div className="w-full h-full flex flex-col space-y-3 p-4">
      <div className="text-center space-y-2">
        <h3 className="font-medium">How are you feeling?</h3>
        <p className="text-xs text-muted-foreground">Choose your input method</p>
      </div>
      
      <div className="grid grid-cols-2 gap-2">
        <Button variant="outline" size="sm" className="flex flex-col gap-1 h-12">
          <Camera className="w-4 h-4" />
          <span className="text-xs">Face</span>
        </Button>
        <Button variant="outline" size="sm" className="flex flex-col gap-1 h-12">
          <Mic className="w-4 h-4" />
          <span className="text-xs">Voice</span>
        </Button>
        <Button variant="outline" size="sm" className="flex flex-col gap-1 h-12">
          <FileText className="w-4 h-4" />
          <span className="text-xs">Text</span>
        </Button>
        <Button variant="outline" size="sm" className="flex flex-col gap-1 h-12">
          <User className="w-4 h-4" />
          <span className="text-xs">Survey</span>
        </Button>
      </div>
      
      <div className="flex justify-center space-x-2 mt-4">
        <Smile className="w-6 h-6 text-green-500" />
        <Meh className="w-6 h-6 text-yellow-500" />
        <Frown className="w-6 h-6 text-red-500" />
      </div>
    </div>
  );
}

export function VoiceRecordingScreen() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center space-y-4 p-4">
      <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
        <Mic className="w-8 h-8 text-white" />
      </div>
      <div className="text-center space-y-2">
        <h3 className="font-medium">Recording...</h3>
        <p className="text-xs text-muted-foreground">Tell us how you're feeling</p>
      </div>
      <div className="w-full space-y-2">
        <div className="flex justify-center space-x-1">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="w-1 bg-red-500 rounded animate-bounce" style={{height: `${Math.random() * 20 + 10}px`, animationDelay: `${i * 0.1}s`}} />
          ))}
        </div>
        <Progress value={65} className="h-1" />
      </div>
      <Button variant="destructive" size="sm">Stop Recording</Button>
    </div>
  );
}

export function AnalysisScreen() {
  return (
    <div className="w-full h-full flex flex-col space-y-3 p-4">
      <div className="text-center space-y-2">
        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mx-auto">
          <Brain className="w-4 h-4 text-primary-foreground" />
        </div>
        <h3 className="font-medium">AI Analysis</h3>
        <p className="text-xs text-muted-foreground">Processing your emotional data...</p>
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-xs">Emotion Detection</span>
          <Badge variant="secondary" className="text-xs">Stressed</Badge>
        </div>
        <Progress value={80} className="h-2" />
        
        <div className="flex justify-between items-center">
          <span className="text-xs">Confidence Level</span>
          <span className="text-xs text-muted-foreground">85%</span>
        </div>
        <Progress value={85} className="h-2" />
      </div>
      
      <Card className="p-3 space-y-2">
        <h4 className="text-xs font-medium">Insights</h4>
        <p className="text-xs text-muted-foreground">Your voice indicates elevated stress levels. Physical tension detected in facial expression.</p>
      </Card>
    </div>
  );
}

export function RecommendationsScreen() {
  return (
    <div className="w-full h-full flex flex-col space-y-3 p-4">
      <div className="text-center space-y-2">
        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mx-auto">
          <Activity className="w-4 h-4 text-white" />
        </div>
        <h3 className="font-medium">Recommendations</h3>
        <p className="text-xs text-muted-foreground">Personalized wellness activities</p>
      </div>
      
      <div className="space-y-2">
        <Card className="p-2">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center">
              <span className="text-xs">🧘</span>
            </div>
            <div>
              <h4 className="text-xs font-medium">5-min Breathing Exercise</h4>
              <p className="text-xs text-muted-foreground">Reduces stress by 40%</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-2">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-green-100 rounded flex items-center justify-center">
              <span className="text-xs">🚶</span>
            </div>
            <div>
              <h4 className="text-xs font-medium">10-min Walk</h4>
              <p className="text-xs text-muted-foreground">Boost mood naturally</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-2">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-purple-100 rounded flex items-center justify-center">
              <span className="text-xs">📱</span>
            </div>
            <div>
              <h4 className="text-xs font-medium">Call a Friend</h4>
              <p className="text-xs text-muted-foreground">Social connection helps</p>
            </div>
          </div>
        </Card>
      </div>
      
      <Button size="sm" className="w-full">Start Activity</Button>
    </div>
  );
}

export function HistoryScreen() {
  return (
    <div className="w-full h-full flex flex-col space-y-3 p-4">
      <div className="text-center space-y-2">
        <h3 className="font-medium">Your Journey</h3>
        <p className="text-xs text-muted-foreground">Emotional wellness over time</p>
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs">Today</span>
          <div className="flex space-x-1">
            <Smile className="w-4 h-4 text-green-500" />
            <Meh className="w-4 h-4 text-yellow-500" />
            <Frown className="w-4 h-4 text-red-500" />
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-xs">Yesterday</span>
          <div className="flex space-x-1">
            <Smile className="w-4 h-4 text-green-500" />
            <Smile className="w-4 h-4 text-green-500" />
            <Meh className="w-4 h-4 text-yellow-500" />
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-xs">This Week</span>
          <Badge variant="outline" className="text-xs">Improving</Badge>
        </div>
      </div>
      
      <Card className="p-3 space-y-2">
        <h4 className="text-xs font-medium">Streak</h4>
        <div className="text-center">
          <span className="text-lg font-medium">7</span>
          <p className="text-xs text-muted-foreground">days in a row</p>
        </div>
      </Card>
    </div>
  );
}