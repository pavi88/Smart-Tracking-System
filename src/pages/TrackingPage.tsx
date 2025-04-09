import { useState, useEffect } from 'react';
import { MapPin, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { toast } from 'sonner';

export default function TrackingPage() {
  const [isBuzzerOn, setIsBuzzerOn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isBuzzerOn) {
      toast.success('Buzzer activated!');
    }
  }, [isBuzzerOn]);

  const handleFindDevice = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast.success('Device location updated!');
    }, 1000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-600">
            <span className="text-2xl">✅</span>
            Your device has been successfully paired
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              className="flex-1"
              size="lg"
              onClick={handleFindDevice}
              disabled={isLoading}
            >
              <MapPin className="mr-2 h-5 w-5" />
              {isLoading ? 'Locating...' : 'Find My Device'}
            </Button>
            <div className="flex items-center justify-between gap-4 flex-1 p-4 border rounded-lg">
              <div className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                <span>Buzzer</span>
              </div>
              <Switch
                checked={isBuzzerOn}
                onCheckedChange={setIsBuzzerOn}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Location Map</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
            <p className="text-muted-foreground">Map will be displayed here</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}