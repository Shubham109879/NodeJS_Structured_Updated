
export interface AddressDto{
     id? : number;
     city: string;
     studentId?: number;
}

export interface StudentUpdateModel{
     name?: string;
     age?: number;
}

export interface AddressUpdateModel{
     city?: string;
}