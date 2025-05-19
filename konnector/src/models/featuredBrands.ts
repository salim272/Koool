export interface FeaturedBrand {
  id: string;
  name: string;
  imgPath?: string;
}

interface RawFeatureBrand {
  id: string;
  name: string;
  brandImgFileName?: string;
  mediaFolderPath?: string;
  mediaDomainURI?: string;
  status?: string;
}

export interface RawFeatureBrandsResponse {
  RESPONSE_BODY: RawFeatureBrand[];
}

export const mapRawFeatureBrandsToFeatureBrands = (
  rawUsers: RawFeatureBrand[]
): FeaturedBrand[] => {
  return rawUsers
    .filter(
      (item: RawFeatureBrand) =>
        item.status?.toUpperCase().includes('FEATURED') &&
        item.brandImgFileName != null
    )
    .map(mapFeaturedBrand)
    .sort((a: RawFeatureBrand, b: RawFeatureBrand) =>
      a.name.localeCompare(b.name)
    );
};

const mapFeaturedBrand = (data: RawFeatureBrand): FeaturedBrand => {
  return {
    id: data.id,
    name: data.name,
    imgPath: (data.mediaFolderPath ?? '') + (data.brandImgFileName ?? ''),
  };
};
