import { Expose } from "class-transformer"
import { IsDateString, IsDefined, IsIn, IsNotEmpty, IsOptional, IsString, IsUUID } from "class-validator"
import { Project } from "src/project/entities/project.entity"
import { User } from "src/user/entities/user.entity"

export class CreateIssueDto {
    @IsString()
    @IsDefined()
    @IsNotEmpty()
    title: string

    @IsString()
    @IsDefined()
    @IsNotEmpty()
    description: string

    @IsDateString()
    @IsDefined()
    @IsNotEmpty()
    startAt: Date

    @IsDateString()
    @IsDefined()
    @IsNotEmpty()
    endAt: Date

    @IsIn(["task", "story", "epic", "bug", "milestone"])
    @IsDefined()
    type: string

    @IsIn(["highest", "high", "medium", "low", "lowest"])
    @IsDefined()
    priority: string

    @IsIn(["open", "inprogress", "done", "todo", "inreview"])
    @IsDefined()
    status: string

    @IsUUID('4')
    // @IsDefined()
    @IsOptional()
    @Expose({name: 'asignee'})
    asigneeId: string

    @IsUUID('4')
    @IsOptional()
    @Expose({name: 'parent'})
    parentId?: string

    project: Project

    asignee: User
}
