import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { BlogFormData } from "@/schemas/blog-schema";
import { FileText } from "lucide-react"
import { UseFormReturn } from "react-hook-form";
import Tiptap from "./Tiptap";

interface MetadataProps {
    form: UseFormReturn<BlogFormData>;
}

const Content: React.FC<MetadataProps> = ({ form }) => {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-6">
            <div className="flex items-center gap-2 text-gray-800">
                <FileText size={20} />
                <h2 className="text-xl font-semibold">Content</h2>
            </div>

            <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Content</FormLabel>
                        <FormControl>
                            {/* <Textarea className="resize-none" {...field} rows={15} /> */}
                            <Tiptap
                                content={field.value}
                                onChange={field.onChange}
                            />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </div>
    )
}

export default Content