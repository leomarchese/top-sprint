type DirectusFile = { id: string };
type FileWrapper = { directus_files_id?: DirectusFile | null };

export const getSmartFileUrl = (
  file: DirectusFile | FileWrapper | null | undefined
): string | null => {
  if (!file) return null;

  let fileId: string | null = null;

  if ('id' in file) {
    fileId = (file as DirectusFile).id;
  } else if ('directus_files_id' in file && file.directus_files_id) {
    fileId = file.directus_files_id.id;
  }

  if (!fileId) return null;

  return `${import.meta.env.VITE_DIRECTUS_ASSETS_URL}/${fileId}?access_token=${import.meta.env.VITE_API_ACCESS_TOKEN}`;
};
