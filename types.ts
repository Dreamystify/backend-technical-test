type Response = {
    data: Data
}

type Data = {
    contentBrowser: ContentBrowser
}

type ContentBrowser = {
    topics: Topic[];
}

type Topic = { 
    name: string;
    units: Unit[]; 
};

type Unit = { 
    name: string;
    lessons: Lesson[]; 
};

type Lesson = {
    id: string;
    name: string;
    subjects: Subject[];
    years: Year[];
};

type Subject = {
    id: string;
    name: string;
};

type Year = {
    id: string;
    name: string;
}

export { Response, Data, ContentBrowser, Topic, Unit, Lesson, Subject, Year } 