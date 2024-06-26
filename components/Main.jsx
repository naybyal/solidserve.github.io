import {ResizablePanel, ResizablePanelGroup} from "@/components/ui/resizable";
import Sidebar from "@/components/Sidebar";
import ProgressCard from "@/components/ProgressCard";
import ActiveHours from "@/components/ActiveHours";
const Main = () => {
    return (
        <div className="flex flex-col h-svh">
            <ResizablePanelGroup
                direction="horizontal"
                className="max-w-screen-2xl rounded-lg border"
            >
                <ResizablePanel defaultSize={18}>
                    <div className="flex items-center justify-center p-6">
                        <Sidebar/>
                    </div>
                </ResizablePanel>
                {/*<ResizableHandle />*/}
                <ResizablePanel defaultSize={82}>
                    <ResizablePanelGroup direction="vertical">
                        <ResizablePanel defaultSize={15}>
                            <div className="flex h-full items-start justify-items-start">
                                <ProgressCard/>
                            </div>
                        </ResizablePanel>
                        {/*<ResizableHandle />*/}
                        <ResizablePanel defaultSize={85}>
                            <div className="flex items-center justify-items-start p-6">
                                <ActiveHours/>
                            </div>
                        </ResizablePanel>
                    </ResizablePanelGroup>
                </ResizablePanel>
            </ResizablePanelGroup>
        </div>
    );
}

export default Main;