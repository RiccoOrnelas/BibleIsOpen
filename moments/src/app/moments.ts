export interface Moment {
    id?: number;
    title: string;
    description: string;
    image: File | null;
    created_at?: string;
    updated_at?: string;
    coments?: [{ text: string, userName: string }];
}