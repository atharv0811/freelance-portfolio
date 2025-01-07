"use client";

import Tiptap from "./Tiptap";
import { BlogFormData } from "@/schemas/blog-schema";
import { FileText, X } from "lucide-react";
import { useFormContext, UseFormReturn } from "react-hook-form";
import { CATEGORIES } from "@/lib/constants/categories";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

interface MetadataProps {
    form: UseFormReturn<BlogFormData>;
}

const Content: React.FC<MetadataProps> = ({ form }) => {
    const [tagsInput, setTagsInput] = useState("");
    const { watch, setValue } = useFormContext<BlogFormData>();

    const tags = watch("tags") || [];

    const addTags = () => {
        if (tagsInput.trim() && !tags.includes(tagsInput.trim())) {
            setValue("tags", [...tags, tagsInput.trim()], {
                shouldValidate: true,
            });
            setTagsInput("");
        }
    };

    const removeTags = (tagsToRemove: string) => {
        setValue(
            "tags",
            tags.filter((k: string) => k !== tagsToRemove),
            { shouldValidate: true }
        );
    };

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-6">
            <div className="flex items-center gap-2 text-gray-800">
                <FileText size={20} />
                <h2 className="text-xl font-semibold">Content</h2>
            </div>

            <FormField
                name="category"
                control={form.control}
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Category</FormLabel>
                        <FormControl>
                            <Select onValueChange={field.onChange} value={field.value || ""}>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a category" />
                                </SelectTrigger>
                                <SelectContent>
                                    {CATEGORIES.map((category) => (
                                        <SelectItem key={category} value={category}>
                                            {category}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </FormControl>
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="tags"
                render={() => (
                    <FormItem>
                        <FormLabel>Tags</FormLabel>
                        <FormControl>
                            <div className="space-y-2">
                                <div className="flex gap-2">
                                    <Input
                                        value={tagsInput}
                                        onChange={(e) => setTagsInput(e.target.value)}
                                        onKeyPress={(e) =>
                                            e.key === "Enter" && (e.preventDefault(), addTags())
                                        }
                                    />
                                    <Button
                                        type="button"
                                        onClick={addTags}
                                        variant="secondary"
                                        className="border-2"
                                    >
                                        Add
                                    </Button>
                                </div>
                                <div className="mt-3 flex flex-wrap gap-2">
                                    {tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-50 text-indigo-700"
                                        >
                                            {tag}
                                            <button
                                                type="button"
                                                onClick={() => removeTags(tag)}
                                                className="ml-2 text-indigo-600 hover:text-indigo-800"
                                            >
                                                <X size={15} />
                                            </button>
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Content</FormLabel>
                        <FormControl>
                            <Tiptap onChange={field.onChange} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="readTime"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Read Time (in min)</FormLabel>
                        <FormControl>
                            <Input {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </div>
    );
};

export default Content;
