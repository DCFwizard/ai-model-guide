import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useSearch } from '@/contexts/SearchContext';
import { models } from '@/data/modelsLoader';
import { Filter, X } from 'lucide-react';

export function FilterPanel() {
  const {
    selectedModalities,
    setSelectedModalities,
    selectedCostTier,
    setSelectedCostTier,
    selectedIndustries,
    setSelectedIndustries,
    openWeightOnly,
    setOpenWeightOnly,
    sortBy,
    setSortBy,
    clearFilters
  } = useSearch();

  // Extract unique values from models
  const allModalities = Array.from(new Set(models.flatMap(m => m.modalities || []))).sort();
  const allIndustries = Array.from(new Set(models.flatMap(m => m.industries || []))).sort();
  const allCostTiers = Array.from(new Set(models.map(m => m.cost_tier).filter(Boolean))).sort();

  const toggleModality = (modality: string) => {
    if (selectedModalities.includes(modality)) {
      setSelectedModalities(selectedModalities.filter(m => m !== modality));
    } else {
      setSelectedModalities([...selectedModalities, modality]);
    }
  };

  const toggleIndustry = (industry: string) => {
    if (selectedIndustries.includes(industry)) {
      setSelectedIndustries(selectedIndustries.filter(i => i !== industry));
    } else {
      setSelectedIndustries([...selectedIndustries, industry]);
    }
  };

  const hasActiveFilters = selectedModalities.length > 0 ||
    selectedCostTier !== null ||
    selectedIndustries.length > 0 ||
    openWeightOnly;

  return (
    <Card className="sticky top-4">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5" />
            <CardTitle>Filters</CardTitle>
          </div>
          {hasActiveFilters && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearFilters}
              className="h-8"
            >
              <X className="h-4 w-4 mr-1" />
              Clear
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Sort By */}
        <div>
          <h3 className="font-semibold mb-3 text-sm">Sort By</h3>
          <RadioGroup value={sortBy} onValueChange={(value: any) => setSortBy(value)}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="name" id="sort-name" />
              <Label htmlFor="sort-name" className="text-sm cursor-pointer">Name (A-Z)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="speed" id="sort-speed" />
              <Label htmlFor="sort-speed" className="text-sm cursor-pointer">Speed Rating</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="quality" id="sort-quality" />
              <Label htmlFor="sort-quality" className="text-sm cursor-pointer">Quality Rating</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="cost" id="sort-cost" />
              <Label htmlFor="sort-cost" className="text-sm cursor-pointer">Cost Rating</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="release_date" id="sort-date" />
              <Label htmlFor="sort-date" className="text-sm cursor-pointer">Newest First</Label>
            </div>
          </RadioGroup>
        </div>

        {/* Modalities */}
        <div>
          <h3 className="font-semibold mb-3 text-sm">Modalities</h3>
          <div className="space-y-2">
            {allModalities.map(mod => (
              <div key={mod} className="flex items-center space-x-2">
                <Checkbox
                  id={`mod-${mod}`}
                  checked={selectedModalities.includes(mod)}
                  onCheckedChange={() => toggleModality(mod)}
                />
                <Label htmlFor={`mod-${mod}`} className="text-sm cursor-pointer capitalize">
                  {mod}
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* Cost Tier */}
        <div>
          <h3 className="font-semibold mb-3 text-sm">Cost Tier</h3>
          <RadioGroup value={selectedCostTier || 'all'} onValueChange={(value) => setSelectedCostTier(value === 'all' ? null : value)}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="all" id="cost-all" />
              <Label htmlFor="cost-all" className="text-sm cursor-pointer">All</Label>
            </div>
            {allCostTiers.map(tier => (
              <div key={tier} className="flex items-center space-x-2">
                <RadioGroupItem value={tier} id={`cost-${tier}`} />
                <Label htmlFor={`cost-${tier}`} className="text-sm cursor-pointer">{tier}</Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        {/* Open Weight */}
        <div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="open-weight"
              checked={openWeightOnly}
              onCheckedChange={(checked) => setOpenWeightOnly(checked as boolean)}
            />
            <Label htmlFor="open-weight" className="text-sm cursor-pointer">
              Open Weight Only
            </Label>
          </div>
        </div>

        {/* Industries */}
        <div>
          <h3 className="font-semibold mb-3 text-sm">Industries</h3>
          <div className="space-y-2 max-h-48 overflow-y-auto">
            {allIndustries.slice(0, 10).map(industry => (
              <div key={industry} className="flex items-center space-x-2">
                <Checkbox
                  id={`ind-${industry}`}
                  checked={selectedIndustries.includes(industry)}
                  onCheckedChange={() => toggleIndustry(industry)}
                />
                <Label htmlFor={`ind-${industry}`} className="text-sm cursor-pointer">
                  {industry}
                </Label>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
