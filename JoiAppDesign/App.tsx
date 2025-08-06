import { StoryboardFrame } from "./components/StoryboardFrame";
import { 
  WelcomeScreen, 
  EmotionInputScreen, 
  VoiceRecordingScreen, 
  AnalysisScreen, 
  RecommendationsScreen, 
  HistoryScreen 
} from "./components/MockupScreens";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import { ArrowRight, Heart, Brain, Activity } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
              <Heart className="w-6 h-6 text-primary-foreground" />
            </div>
            <h1 className="text-3xl font-medium">Joi App Storyboard</h1>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ai driven emotional wellness with Metaverse action 
          </p>
        </div>

        {/* Key Features Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-base">
                <Heart className="w-5 h-5 text-red-500" />
                Multimodal Tracking
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Capture emotions through facial recognition, voice analysis, text input, and structured surveys
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-base">
                <Brain className="w-5 h-5 text-blue-500" />
                AI Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Advanced machine learning algorithms analyze patterns and provide emotional insights
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-base">
                <Activity className="w-5 h-5 text-green-500" />
                Personalized Recommendations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Receive tailored wellness activities and interventions based on your emotional state
              </p>
            </CardContent>
          </Card>
        </div>

        {/* User Flow */}
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-medium mb-2">User Journey</h2>
            <p className="text-muted-foreground">Follow the complete user experience from onboarding to wellness recommendations</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Step 1: Welcome/Onboarding */}
            <StoryboardFrame
              step={1}
              title="Welcome & Onboarding"
              description="User first opens the app and learns about its capabilities"
              features={[
                "App introduction and value proposition",
                "Permission requests for camera/microphone",
                "Quick tutorial on multimodal emotion tracking",
                "User profile setup"
              ]}
            >
              <WelcomeScreen />
            </StoryboardFrame>

            {/* Step 2: Emotion Input Selection */}
            <StoryboardFrame
              step={2}
              title="Emotion Input Selection"
              description="User chooses how they want to log their current emotional state"
              features={[
                "Four input modalities available",
                "Quick emotion indicator icons",
                "Accessibility options for all users",
                "Multiple inputs can be combined"
              ]}
              highlight={true}
            >
              <EmotionInputScreen />
            </StoryboardFrame>

            {/* Step 3: Voice Recording */}
            <StoryboardFrame
              step={3}
              title="Voice Input Capture"
              description="User records their voice describing their emotional state"
              features={[
                "Real-time audio visualization",
                "Voice pattern analysis",
                "Emotion detection from tone and speech",
                "Privacy-focused local processing"
              ]}
            >
              <VoiceRecordingScreen />
            </StoryboardFrame>

            {/* Step 4: AI Analysis */}
            <StoryboardFrame
              step={4}
              title="AI Analysis & Processing"
              description="The app analyzes all collected data to understand emotional state"
              features={[
                "Multi-modal data fusion",
                "Real-time emotion classification",
                "Confidence scoring",
                "Pattern recognition over time"
              ]}
            >
              <AnalysisScreen />
            </StoryboardFrame>

            {/* Step 5: Recommendations */}
            <StoryboardFrame
              step={5}
              title="Wellness Recommendations"
              description="Personalized activities suggested based on emotional analysis"
              features={[
                "Evidence-based wellness interventions",
                "Difficulty and time-based filtering",
                "Progress tracking for activities",
                "Integration with calendar and reminders"
              ]}
            >
              <RecommendationsScreen />
            </StoryboardFrame>

            {/* Step 6: History & Tracking */}
            <StoryboardFrame
              step={6}
              title="Progress & History"
              description="Long-term tracking of emotional patterns and wellness journey"
              features={[
                "Emotional trend visualization",
                "Streak tracking and gamification",
                "Weekly/monthly insights reports",
                "Export data for healthcare providers"
              ]}
            >
              <HistoryScreen />
            </StoryboardFrame>
          </div>
        </div>

        {/* Technical Architecture Overview */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="w-5 h-5" />
              Technical Architecture
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="space-y-2">
                <Badge variant="outline" className="w-fit">Frontend</Badge>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• React Native for cross-platform</li>
                  <li>• Real-time camera/microphone access</li>
                  <li>• Offline-first data storage</li>
                  <li>• Push notifications</li>
                </ul>
              </div>
              
              <div className="space-y-2">
                <Badge variant="outline" className="w-fit">AI/ML</Badge>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Facial emotion recognition</li>
                  <li>• Voice sentiment analysis</li>
                  <li>• Natural language processing</li>
                  <li>• Recommendation engine</li>
                </ul>
              </div>
              
              <div className="space-y-2">
                <Badge variant="outline" className="w-fit">Backend</Badge>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Secure data processing</li>
                  <li>• User authentication</li>
                  <li>• Analytics and insights</li>
                  <li>• Healthcare integrations</li>
                </ul>
              </div>
              
              <div className="space-y-2">
                <Badge variant="outline" className="w-fit">Privacy</Badge>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• End-to-end encryption</li>
                  <li>• HIPAA compliance</li>
                  <li>• Local data processing</li>
                  <li>• User data control</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Next Steps */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ArrowRight className="w-5 h-5" />
              Implementation Roadmap
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Badge className="w-fit">Phase 1: MVP</Badge>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Basic emotion input (text + survey)</li>
                  <li>• Simple sentiment analysis</li>
                  <li>• Basic wellness recommendations</li>
                  <li>• User authentication</li>
                </ul>
              </div>
              
              <div className="space-y-2">
                <Badge variant="secondary" className="w-fit">Phase 2: Enhanced</Badge>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Voice emotion detection</li>
                  <li>• Facial recognition</li>
                  <li>• Advanced AI analysis</li>
                  <li>• Progress tracking</li>
                </ul>
              </div>
              
              <div className="space-y-2">
                <Badge variant="outline" className="w-fit">Phase 3: Advanced</Badge>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Healthcare provider integration</li>
                  <li>• Predictive wellness insights</li>
                  <li>• Social support features</li>
                  <li>• Wearable device integration</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}