using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace AutoShow.Api.Migrations
{
    /// <inheritdoc />
    public partial class AddListingImageRelationship : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_ListingImages_ListingId",
                table: "ListingImages",
                column: "ListingId");

            migrationBuilder.AddForeignKey(
                name: "FK_ListingImages_Listings_ListingId",
                table: "ListingImages",
                column: "ListingId",
                principalTable: "Listings",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ListingImages_Listings_ListingId",
                table: "ListingImages");

            migrationBuilder.DropIndex(
                name: "IX_ListingImages_ListingId",
                table: "ListingImages");
        }
    }
}
