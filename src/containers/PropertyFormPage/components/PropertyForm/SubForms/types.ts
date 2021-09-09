export interface FormButtonType {
    text: string;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    hide?: boolean;
}
