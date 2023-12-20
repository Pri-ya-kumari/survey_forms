export interface admin{
    name:string,
    email:string,
    password:string
}
export interface question{
    Question:string,
    option:any
}
export interface ftitle{
    title:string,
}
export interface character{
    fname:string,
    lname:string,
    email:string,
    phone:string,
    test:string, 
    op1:string,
    op2:string,
    op3:string,
    op4:string,
    op5:string,
    op6:string,
    op7:string,
    text1:string,
    text2:string,
    text3:string;
    time:Date;
}
export const charactera = {
    fname: 'first name',
    lname: 'last name',
    email: 'abc@gmail.com',
    phone: '1234567890',
    test:'angular',
    op1:'option',
    op2:'option',
    op3:'option',
    op4:'option',
    op5:'option',
    op6:'option',
    op7:'option',
    text1:'write',
    text2:'write',
    text3:'write',
    time:'12:00 AM',
}

// form.model.ts
export interface Form {
    title: string;
    questions: FormQuestion[];
  }
  
  export interface FormQuestion {
    question: string;
    type: 'text' | 'multipleChoice';
    options?: string[];
  }
  