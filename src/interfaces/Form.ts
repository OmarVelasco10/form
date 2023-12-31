// Generated by https://quicktype.io

export interface Form {
    result: ResultForm[];
}

export interface ResultForm {
    id:          number;
    type:        string;
    name:        string;
    value:       string;
    placeholder: string;
    label:       string;
    validations: Validation[];
    options?:    Option[];
}

export interface Option {
    id:    number;
    label: string;
    value: string;
}

export interface Validation {
    type:   string;
    value?: number;
}
