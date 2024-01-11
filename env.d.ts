/// <reference types="vite/client" />

interface Product {
    Id: number;
    Name: string;
    CreatedAt: string;
    UpdatedAt: string;
}

interface Release {
    Id: number;
    ProductId: number;
    Name: string;
    TarballLink: string;
    CreatedAt: string;
    UpdatedAt: string;
    // Images: null;
}

interface Image {
    Id: number;
    ImageName: string;
    ImageSigned: boolean;
    TrivySigned: boolean;
    TrivyValid: boolean;
    SbomSigned: boolean;
    SbomValid: boolean;
    LastScannedAt: string;
    CreatedAt: string;
    UpdatedAt: string;
}

interface ReleaseImageMapping {
    Id: number;
    ReleaseId: number;
    ImageId: number;
    CreatedAt: string;
    UpdatedAt: string;
}
