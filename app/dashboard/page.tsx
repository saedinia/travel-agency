import React from "react";
import { Button } from "@/components/ui/button";
import {
  MyFavoritesIcon,
  MyPlanIcon,
  MyPlacesIcon,
  MyReviewsIcon,
  NewPostIcon,
  ShowReviewsIcon,
  SocialNetworksIcon,
  PagesLayoutIcon,
  EditProfileIcon,
} from "./icons";

function page() {
  return (
    <div className="flex py-10">
      <div className="ml-5 flex flex-col">
        <h5 className="font-bold">User Menu</h5>
        <ul>
          <li>
            {" "}
            <MyFavoritesIcon />
            Edit Profile
          </li>

          <li>
            <MyPlanIcon />
            My Plan
          </li>

          <li>
            <MyFavoritesIcon />
            My Favorites
          </li>

          <li>
            <MyPlacesIcon />
            My Places
          </li>

          <li>
            <MyReviewsIcon />
            My Reviews
          </li>
        </ul>

        <div className="mt-12">
          <h3>Admin Menu</h3>
          <ul>
            <li>
              <NewPostIcon />
              New Post
            </li>

            <li>
              <ShowReviewsIcon />
              Show Reviews
            </li>

            <li>
              <SocialNetworksIcon />
              Socila Networks
            </li>

            <li>
              <PagesLayoutIcon />
              Pages Layout
            </li>
          </ul>
        </div>
      </div>

      <div className="menu">
        <div className="flex flex-col gap-4">
          <h3 className="font-bold">User Menus</h3>

          <div className="flex gap-4">
            <Button className="button">
              <EditProfileIcon />
              Edit Profile
            </Button>

            <Button className="button">
              <MyPlanIcon />
              My Plan
            </Button>
          </div>
          <div className="flex gap-4">
            <Button className="button">
              <MyFavoritesIcon />
              My Favorites
            </Button>
            <Button className="button">
              <MyPlacesIcon />
              My Places
            </Button>
          </div>
          <div>
            <Button className="button">
              <MyReviewsIcon />
              My Reviews
            </Button>
          </div>

          <h3 className="font-bold">Admin Menus</h3>
          <div className="flex gap-4">
            <Button className="button">
              <NewPostIcon />
              New Post
            </Button>
            <Button className="button">
              <ShowReviewsIcon />
              Show Reviews
            </Button>
          </div>
          <div className="flex gap-4">
            <Button className="button">
              <SocialNetworksIcon />
              Social Networks
            </Button>
            <Button className="button">
              <PagesLayoutIcon />
              Pages Layout
            </Button>
          </div>
        </div>
      </div>
    
    </div>
  );
}

export default page;