import {
    Button,
    Dialog,
    DialogBody,
    DialogFooter,
    DialogHeader,
} from "@material-tailwind/react";

const DialogBox = (props) => {
    return (
        <Dialog open={props.open} size={"xl"} handler={props.handleOpen}>
            <DialogHeader className="font-bold font-sans text-[2rem] text-[#189BA5]">
                {props.title}
            </DialogHeader>
            <DialogBody divider>
                <div className="h-full">
                    <div className="font-custom sm:text-[1.25rem] font-medium px-4 py-4">
                        {props.data}
                    </div>
                    <div className="font-heading font-bold  text-[1rem] sm:text-[2rem] text-center py-4">
                        EXECUTIVE BOARD
                    </div>
                    <div className="flex justify-around py-2">
                        <div className="font-custom flex flex-col items-center">
                            <div className="h-32 w-32 sm:h-40 sm:w-40 rounded-full border-2 border-black"></div>
                            <div className="font-bold sm:text-[1.5rem]">
                                Aditya Sharma
                            </div>
                            <div className="sm:text-[1.25rem] font-medium">
                                Chair
                            </div>
                        </div>
                        <div className="font-custom flex flex-col items-center">
                            <div className="h-32 w-32 sm:h-40 sm:w-40 rounded-full border-2 border-black"></div>
                            <div className="font-bold sm:text-[1.5rem]">
                                Aravind Y Belur
                            </div>
                            <div className="sm:text-[1.25rem] font-medium">
                                Vice Chair
                            </div>
                        </div>
                    </div>
                    <div className="font-heading font-bold text-[1rem] sm:text-[2rem] text-center py-4">
                        Delegate Resources
                    </div>
                    <div className="font-custom">
                        <span className="font-bold">Agenda:</span>Agenda
                    </div>
                </div>
            </DialogBody>
            <DialogFooter>
                <Button
                    variant="text"
                    color="red"
                    onClick={props.handleOpen}
                    className="mr-1"
                >
                    <span>Close</span>
                </Button>
            </DialogFooter>
        </Dialog>
    );
};

export default DialogBox;
