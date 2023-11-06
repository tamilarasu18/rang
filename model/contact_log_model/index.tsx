
export class ContactLogModel {
    id: number | null = null;
    name: string | null = null;
    mobile: string | null = null;
    email: string | null = null;
    catergorie: string | null = null;
    location: string | null = null;
    message: string | null = null;
    constructor(data?: Partial<ContactLogModel>) {
        if (data) {
            this.deserialize(data);
        }
    }

    private deserialize(data: Partial<ContactLogModel>) {
        const keys = Object.keys(this);
        for (const key of keys) {
            if (data.hasOwnProperty(key)) {
                (this as any)[key] = (data as any)[key];
            }
        }
    }
}