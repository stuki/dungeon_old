﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using dungeon_api;

namespace dungeonapi.Migrations
{
    [DbContext(typeof(DungeonContext))]
    partial class DungeonContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn)
                .HasAnnotation("ProductVersion", "2.1.1-rtm-30846")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            modelBuilder.Entity("dungeon_api.Character", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Advancedmoves");

                    b.Property<string>("Alignment");

                    b.Property<int>("Armor");

                    b.Property<string>("Bonds");

                    b.Property<int>("Charisma");

                    b.Property<int>("Coin");

                    b.Property<int>("Constitution");

                    b.Property<int>("Damage");

                    b.Property<int>("Dexterity");

                    b.Property<string>("Gear");

                    b.Property<int>("Hitpoints");

                    b.Property<int>("Intelligence");

                    b.Property<int>("Level");

                    b.Property<string>("Looks");

                    b.Property<string>("Name")
                        .IsRequired();

                    b.Property<int>("PlayerId");

                    b.Property<string>("Race");

                    b.Property<int>("SessionId");

                    b.Property<string>("Spells");

                    b.Property<string>("Startingmoves");

                    b.Property<int>("Strength");

                    b.Property<int>("Wisdom");

                    b.Property<int>("XP");

                    b.HasKey("Id");

                    b.HasIndex("SessionId");

                    b.ToTable("Characters");
                });

            modelBuilder.Entity("dungeon_api.Log", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("CreatedAt");

                    b.Property<string>("Label")
                        .IsRequired();

                    b.Property<int>("PlayerId");

                    b.Property<int>("SessionId");

                    b.Property<string>("Text")
                        .IsRequired();

                    b.HasKey("Id");

                    b.HasIndex("SessionId");

                    b.ToTable("Logs");
                });

            modelBuilder.Entity("dungeon_api.Player", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Name")
                        .IsRequired();

                    b.HasKey("Id");

                    b.ToTable("Players");
                });

            modelBuilder.Entity("dungeon_api.PlayerSession", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("PlayerId");

                    b.Property<int>("SessionId");

                    b.HasKey("Id");

                    b.HasIndex("PlayerId");

                    b.HasIndex("SessionId");

                    b.ToTable("PlayerSessions");
                });

            modelBuilder.Entity("dungeon_api.Session", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("CreatedAt");

                    b.Property<int>("CreatorId");

                    b.Property<int>("DungeonMasterId");

                    b.Property<string>("Name")
                        .IsRequired();

                    b.Property<string>("Password");

                    b.HasKey("Id");

                    b.ToTable("Sessions");
                });

            modelBuilder.Entity("dungeon_api.Character", b =>
                {
                    b.HasOne("dungeon_api.Session", "Session")
                        .WithMany("Characters")
                        .HasForeignKey("SessionId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("dungeon_api.Log", b =>
                {
                    b.HasOne("dungeon_api.Session", "Session")
                        .WithMany("Logs")
                        .HasForeignKey("SessionId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("dungeon_api.PlayerSession", b =>
                {
                    b.HasOne("dungeon_api.Player", "Player")
                        .WithMany("PlayerSessions")
                        .HasForeignKey("PlayerId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("dungeon_api.Session", "Session")
                        .WithMany("PlayerSessions")
                        .HasForeignKey("SessionId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}