import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("movies")
class Movie {
    @PrimaryGeneratedColumn("increment")
    id: number

    @Column({unique: true, type: "varchar", length: 50, nullable: false})
    name: string

    @Column({type: "text", nullable: true})
    description?: string | undefined | null

    @Column({type: "integer", nullable: false})
    duration: number

    @Column({type: "integer", nullable: false})
    price: number
}

export default Movie;
