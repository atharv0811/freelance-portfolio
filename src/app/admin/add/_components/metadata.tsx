import { Button } from "@/components/ui/button";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { BlogFormData } from "@/schemas/blog-schema";
import { Tag, X } from "lucide-react"
import { useState } from "react";
import { useFormContext, UseFormReturn } from "react-hook-form";
import Image from "next/image";

interface MetadataProps {
    form: UseFormReturn<BlogFormData>;
}

const Metadata: React.FC<MetadataProps> = ({ form }) => {
    const [keywordInput, setKeywordInput] = useState("");
    const [previewImage, setPreviewImage] = useState<string | null>(null);
    const { watch, setValue } = useFormContext<BlogFormData>();

    const keywords = watch("keywords") || [];
    const title = watch("title") || "";

    const handleSlugGeneration = () => {
        const slug = title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '');
        setValue("slug", slug, { shouldValidate: true });
    };

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                const result = reader.result as string;
                setPreviewImage(result);
                setValue("coverImage", result, { shouldValidate: true });
            };
            reader.readAsDataURL(file);
        }
    };

    const addKeyword = () => {
        if (keywordInput.trim() && !keywords.includes(keywordInput.trim())) {
            setValue("keywords", [...keywords, keywordInput.trim()], {
                shouldValidate: true,
            });
            setKeywordInput("");
        }
    };

    const removeKeyword = (keywordToRemove: string) => {
        setValue(
            "keywords",
            keywords.filter((k: string) => k !== keywordToRemove),
            { shouldValidate: true }
        );
    };

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-6">
            <div className="flex items-center gap-2 text-gray-800">
                <Tag size={20} />
                <h2 className="text-xl font-semibold">Metadata</h2>
            </div>
            <div className="space-y-5">
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Title</FormLabel>
                            <FormControl>
                                <Input {...field} onBlur={handleSlugGeneration} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="slug"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>URL Slug</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Meta Description</FormLabel>
                            <FormControl>
                                <Textarea className="resize-none" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="keywords"
                    render={() => (
                        <FormItem>
                            <FormLabel>Keywords</FormLabel>
                            <FormControl>
                                <div className="space-y-2">
                                    <div className="flex gap-2">
                                        <Input
                                            value={keywordInput}
                                            onChange={(e) => setKeywordInput(e.target.value)}
                                            onKeyPress={(e) =>
                                                e.key === "Enter" && (e.preventDefault(), addKeyword())
                                            }
                                        />
                                        <Button
                                            type="button"
                                            onClick={addKeyword}
                                            variant="secondary"
                                            className="border-2"
                                        >
                                            Add
                                        </Button>
                                    </div>
                                    <div className="mt-3 flex flex-wrap gap-2">
                                        {keywords.map((keyword) => (
                                            <span
                                                key={keyword}
                                                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-50 text-indigo-700"
                                            >
                                                {keyword}
                                                <button
                                                    type="button"
                                                    onClick={() => removeKeyword(keyword)}
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
                    name="coverImage"
                    render={() => (
                        <FormItem>
                            <FormLabel>Cover Image</FormLabel>
                            <FormControl>
                                <Input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageUpload}
                                />
                            </FormControl>
                            <FormMessage />
                            {previewImage && (
                                <div className="mt-3">
                                    <Image
                                        width={400}
                                        height={400}
                                        src={previewImage}
                                        alt="Cover Preview"
                                        className="rounded-md max-w-full h-auto"
                                    />
                                </div>
                            )}
                        </FormItem>
                    )}
                />
            </div>
        </div>
    )
}

export default Metadata