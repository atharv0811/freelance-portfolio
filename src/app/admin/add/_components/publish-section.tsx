import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { BlogFormData } from "@/schemas/blog-schema";
import { Calendar } from "lucide-react";
import { Controller, useFormContext, UseFormReturn } from "react-hook-form";

interface MetadataProps {
  form: UseFormReturn<BlogFormData>;
}

const PublishSection: React.FC<MetadataProps> = ({ form }) => {
  const { register } = useFormContext<BlogFormData>();
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-6">
      <div className="flex items-center gap-2 text-gray-800">
        <Calendar size={20} />
        <h2 className="text-xl font-semibold">Publishing</h2>
      </div>

      <div className="space-y-4">
        <Controller
          control={form.control}
          name="publishDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Publish Date</FormLabel>
              <FormControl>
                <Input type="date" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex items-center">
          <Input
            type="checkbox"
            id="isDraft"
            {...register('isDraft')}
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
          />
          <label htmlFor="isDraft" className="ml-2 block text-sm text-gray-700">
            Save as draft
          </label>
        </div>
      </div>
    </div>
  )
}

export default PublishSection