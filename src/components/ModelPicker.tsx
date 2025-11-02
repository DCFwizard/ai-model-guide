import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight } from "lucide-react";
export function ModelPicker() {
  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl">Model Picker</CardTitle>
        <CardDescription>Find the best AI model for your needs in seconds.</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="task">What is your primary task?</Label>
            <Select>
              <SelectTrigger id="task">
                <SelectValue placeholder="Select a task..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="summarization">Summarization</SelectItem>
                <SelectItem value="coding">Coding Assistance</SelectItem>
                <SelectItem value="rag">RAG</SelectItem>
                <SelectItem value="writing">Creative Writing</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-4">
            <Label>What are your constraints?</Label>
            <div className="flex items-center space-x-2">
              <Checkbox id="low-cost" />
              <Label htmlFor="low-cost" className="font-normal">Low Cost</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="open-source" />
              <Label htmlFor="open-source" className="font-normal">Open-weight</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="long-context" />
              <Label htmlFor="long-context" className="font-normal">Long Context</Label>
            </div>
          </div>
          <Button type="submit" className="w-full bg-sky-600 hover:bg-sky-700">
            Find Models <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}