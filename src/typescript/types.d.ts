type LayoutProps = Readonly<{
    children: React.ReactNode;
}>

type PageProps = {
    params: {
        estate_id: number
    }
}

type StringInputStateType = [
    { value: string; validity: boolean },
    React.Dispatch<React.SetStateAction<{ value: string; validity: boolean }>>
];
type NumberInputStateType = [
    { value: number; validity: boolean },
    React.Dispatch<React.SetStateAction<{ value: number; validity: boolean }>>
];