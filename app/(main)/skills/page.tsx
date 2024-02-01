import { SkillConfig } from "@/config/skill-config";

export default function SkillPage() {
    return (
        <div className="mt-20">
            <div className="p-4 flex flex-col gap-4">
                <h1 className="text-xl font-bold">My Skill</h1>
                <div className="grid md:grid-cols-4 grid-cols-2 gap-2">
                    {SkillConfig.map((item, index) => (
                        <div key={index} className="border border-foreground rounded-md py-2 px-3 space-y-2">
                            <item.icon size={34} className="text-foreground" />
                            <p>{item.name}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="hidded md:block h-12"></div>
        </div>
    )
}