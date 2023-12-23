
export class ContactLogModel {
    id: string | null = null;
    name: string | null = null;
    lastName: string | null = null;
    mobile: string | null = null;
    email: string | null = null;
    catergorie: string | null = null;
    type: string | null = null;
    city: string | null = null;
    country: string | null = null;
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