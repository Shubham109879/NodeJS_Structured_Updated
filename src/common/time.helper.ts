

export class TimeHelper{

    static timestamp = (date: Date): string => {
        return date.getTime().toString();
    };
}