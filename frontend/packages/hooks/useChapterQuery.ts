import { useQuery } from "@tanstack/react-query";
import { ChapterData, getChapters } from "@local/service";

export function useChapterQuery() {
  return useQuery<ChapterData[], Error>({
    queryKey: ["chapters"],
    queryFn: getChapters,
  });
}
